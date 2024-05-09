import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { CacheModule } from "@nestjs/cache-manager";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as redisStore from "cache-manager-redis-store";
import { TerminusModule } from '@nestjs/terminus';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), TerminusModule,CacheModule.register({ isGlobal: true,
    store: redisStore,
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_HOST), }),
    TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
    }), UsersModule, AuthModule, HealthModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
