import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports:[PassportModule,JwtModule.register({secret:'345hi9w1',signOptions:{expiresIn:'1h'}})],
    providers:[JwtStrategy],
    exports:[JwtModule]
})
export class AuthModule {}
