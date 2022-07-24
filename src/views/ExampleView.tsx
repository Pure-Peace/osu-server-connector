// component example
import { useTranslation } from 'react-i18next';

import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { downloadDir } from '@tauri-apps/api/path';
import { open } from '@tauri-apps/api/shell';
import { invoke } from '@tauri-apps/api/tauri';
import CustomButton from '../components/CustomButton';

export default function ExampleView() {
  const { t } = useTranslation();

  // fs example
  async function createFile() {
    // https://tauri.app/v1/api/js/modules/fs
    const downloadDirPath = await downloadDir();
    const filePath = `${downloadDirPath}/example_file.txt`;
    await writeTextFile(
      'example_file.txt',
      'oh this is from TAURI! COOLIO.\n',
      { dir: BaseDirectory.Download }
    );
    // NOTE: https://github.com/tauri-apps/tauri/issues/4062
    await open(downloadDirPath);
    await invoke('process_file', { filepath: filePath }).then((msg) =>
      console.log(msg === 'Hello from Rust!')
    );
  }

  return <CustomButton onClick={createFile}>Do something with fs</CustomButton>;
}
