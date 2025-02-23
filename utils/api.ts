const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟服务器存储
let serverStorage: { [key: string]: any } = {};

export async function saveAnnouncementSettings(settings: any) {
  await delay(500); // 模拟网络延迟
  serverStorage['announcementSettings'] = settings;
}

export async function getAnnouncementSettings() {
  await delay(500); // 模拟网络延迟
  return serverStorage['announcementSettings'] || null;
}

