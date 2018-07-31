
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'http://localhost:8081/auth/',
    redirectUri: window.location.origin + '/dashboard',
    clientId: 'client',
    scope: 'user_info',
    loginUrl: 'http://localhost:8081/auth/oauth/authorize',
    tokenEndpoint: 'http://localhost:8081/auth/oauth/token',
    oidc: false,
    responseType: 'authorization_code',
    postLogoutRedirectUri: window.location.origin + '/login',
    strictDiscoveryDocumentValidation: false/*,
    logoutUrl: 'http://localhost:8081/auth/oauth2/logout'*/
}

export class Authentication {

}
