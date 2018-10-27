import { WorkoutsModule } from './workouts.module';

describe('WorkoutsModule', () => {
  let workoutsModule: WorkoutsModule;

  beforeEach(() => {
    workoutsModule = new WorkoutsModule();
  });

  it('should create an instance', () => {
    expect(workoutsModule).toBeTruthy();
  });
});
