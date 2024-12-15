import { z } from 'zod';

const tabsParamsSchema = z.object({ tab: z.enum(['family', 'social', 'special']).catch('family') });
type Tabs = z.infer<typeof tabsParamsSchema>['tab'];

export { tabsParamsSchema };
export type { Tabs };
