import { createDatabaseService, createTable } from '../database';
import fs from 'fs';
import path from 'path';

export const service = createDatabaseService('story');

// episode 1 load
{
  const ep1 = service.database('episode_1', true, 'json');

  const or1 = ep1.get('test');
  console.log('test');
}
fs.writeFileSync(path.join('./db', 'test.json'), JSON.stringify({ e: 1 }));
