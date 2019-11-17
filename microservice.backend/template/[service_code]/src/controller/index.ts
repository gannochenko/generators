<% if (use_rest) { %>
import { HomeController } from './home/home';
import { SampleController } from './sample/sample';
<% } %>
import { HealthController } from './health/health';

export const controllers = [
<% if (use_rest) { %>
    HomeController,
    SampleController,
<% } %>
    HealthController
];
