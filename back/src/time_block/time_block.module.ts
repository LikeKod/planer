import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TimeBlockController } from './time_block.controller';
import { TimeBlockService } from './time_block.service';

@Module({
  controllers: [TimeBlockController],
  providers: [TimeBlockService, PrismaService],
  exports: [TimeBlockService]
})
export class TimeBlockModule {}
