import {
  b2BodyType,
  b2PolygonShape,
  b2World,
  type b2FixtureDef,
  type b2StepConfig,
} from '@box2d/core';

import loadTileData from './Tiles';

export default function WorldLoader() {
  // loading contents
  loadTileData(
    {
      name: 'dirt',
      sprite: './',
    },
    {
      name: 'stone',
      sprite: '',
    }
  );

  const world = b2World.Create({
    x: 0,
    y: -10,
  });

  const body = world.CreateBody({
    type: b2BodyType.b2_dynamicBody,
    position: { x: 0, y: 4 },
  });
  const dynamicBox = new b2PolygonShape();
  dynamicBox.SetAsBox(1, 1);

  const fixtureDef: b2FixtureDef = {
    shape: dynamicBox,
    density: 1,
    friction: 0.3,
  };

  body.CreateFixture(fixtureDef);

  const timeStep = 1 / 60;
  const stepConfig: b2StepConfig = {
    velocityIterations: 6,
    positionIterations: 2,
  };

  // for (let i = 0; i < 60; ++i) {
  //   world.Step(timeStep, stepConfig);
  //   const position = body.GetPosition(),
  //     angle = body.GetAngle();

  //   console.log({
  //     x: position.x.toFixed(2),
  //     y: position.y.toFixed(2),
  //     a: angle.toFixed(2),
  //   });
  // }
}
