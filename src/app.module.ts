import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { Prisma1Module } from './prisma1/prisma1.module';

@Module({
  imports: [PrismaModule, Prisma1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
