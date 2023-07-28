import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { AxiosHeaders } from "axios";

@Module({
    imports: [
        ConfigModule,
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                baseURL: "https://imai.co/api",
                // baseURL: "https://www.google.com",
                headers: new AxiosHeaders({
                    "Authkey": configService.get("AUTH_KEY")
                })
            }),
            inject: [ConfigService]
        })
    ],
    exports: [HttpModule]
})
export class CustomHttpModule {
}
