import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // Default PostgreSQL port
      username: 'postgres', //default PostgreSQL username
      password: '12345',
      database: 'nestjsfiledb',
      entities: [User], //User Entity
      synchronize: true, // Only for development
    }), UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
