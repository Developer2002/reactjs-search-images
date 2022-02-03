import { useImages } from '../../hooks/useImages';

import { Header } from '../Header';
import { SubHeader } from '../SubHeader';
import { ListImages} from '../ListImages';
import { Ops } from '../Ops';

export function Dashboard() {
  const { totalHits } = useImages();

  return (
    <>
      <Header />
      <SubHeader />
      { totalHits !== 0 ? <ListImages /> : <Ops /> }
    </>
  );
}