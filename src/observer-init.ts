declare const LiveAPI: any;
declare function outlet(index: number, value: any): void;
declare function post(message: string): void;

const observers: any[] = [];

function makeCallback(trackIndex: number): (args: any[]) => void {
  return function callback(args: any[]) {
    if (args[0] === "name") {
      post(`[Track ${trackIndex}] Name changed\n`);
      outlet(0, "bang");
    }
  };
}

function bang(): void {
  const liveSet = new LiveAPI("live_set");
  const trackCount = liveSet.getcount("tracks");

  for (let i = 0; i < trackCount; i++) {
    const path = `live_set tracks ${i}`;
    const observer = new LiveAPI(makeCallback(i));
    observer.path = path;
    observer.property = "name";
    observers.push(observer);
  }

  outlet(0, "bang");
}
