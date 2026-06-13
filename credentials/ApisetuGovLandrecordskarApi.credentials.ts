import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovLandrecordskarApi implements ICredentialType {
        name = 'N8nDevApisetuGovLandrecordskarApi';

        displayName = 'Apisetu Gov Landrecordskar API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovLandrecordskar/apisetu-gov-landrecordskar.svg', dark: 'file:../nodes/ApisetuGovLandrecordskar/apisetu-gov-landrecordskar.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/landrecordskar/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/landrecordskar/v3',
                        description: 'The base URL of your Apisetu Gov Landrecordskar API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
