import { createDatabaseService, createTable } from '../database';

export const service = createDatabaseService('story');

// episode 1 load
{
  const ep1 = service.database('episode_1', true, 'json');

  const or1 = ep1.get('test');
}
