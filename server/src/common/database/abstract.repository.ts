import { Logger, NotFoundException } from '@nestjs/common';
import { Model, Types, FilterQuery, UpdateQuery } from 'mongoose';

import { AbstractDocument } from 'src/common/database/abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (await createdDocument.save()).toJSON() as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = (await this.model.findOne(
      filterQuery,
      {},
      { lean: true },
    )) as TDocument;
    if (!document) {
      this.logger.warn(
        'Provided filter query resulted in no documents found',
        filterQuery,
      );
      throw new NotFoundException('Document not found');
    }
    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>,
  ): Promise<TDocument> {
    const document = (await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
    })) as TDocument;
    if (!document) {
      this.logger.warn(
        'Provided filter query resulted in no documents found',
        filterQuery,
      );
      throw new NotFoundException('Document not found');
    }
    return document;
  }

  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    return (await this.model.find(
      filterQuery,
      {},
      { lean: true },
    )) as TDocument[];
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>,
  ): Promise<TDocument> {
    return (await this.model.findOneAndDelete(filterQuery, {
      lean: true,
    })) as TDocument;
  }
}
