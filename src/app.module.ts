import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { LoggerModule } from 'nestjs-pino';
import { CORRELATION_ID_HEADER, CorrelationIdMiddleware } from './correlation-id/correlation-id.middleware';

@Module({
  imports: [ConfigModule.forRoot(), LoggerModule.forRoot({
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
          messageKey: 'message'
        },
      },
      messageKey: 'message',
      customProps: (req) => {
        return {
          correlation:  req.headers[CORRELATION_ID_HEADER],
        }
      },
      autoLogging: false,
      serializers: {
        req: () => {
          return undefined;
        },
        res: () => {
          return undefined;
        }
      }

    }
  }), TerminusModule,CacheModule.register({ isGlobal: true,
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
