import {
  mdiChartTimelineVariant,
  mdiPodcast,
  mdiWeightLifter,
  mdiEye,
  mdiBookshelf,
  mdiTimerSand,
  mdiExitRun,
  mdiOpenInNew,
} from '@mdi/js'
import Head from 'next/head'
import SectionMain from '@/components/SectionMain'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton'
import CardBox from '@/components/CardBox'
import { getPageTitle } from '@/config'
import Link from 'next/link'
import { colorsText } from '@/colors'
import BaseIcon from '@/components/BaseIcon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBarItemPlain'
import menuNavBar from '../menuNavBar'
import Navitation from '@/components/Navigation'

const Home = () => {
  return (
    <div className={`overflow-hidden lg:overflow-visible`}>
      <div
        className={`pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <Head>
          <title>{getPageTitle('Home')}</title>
        </Head>
        <Navitation />
        {/* <NavBar menu={menuNavBar} className={'ml-60 lg:ml-0'}>
          <NavBarItemPlain display="lg:flex">Flowley</NavBarItemPlain>
        </NavBar> */}
        <SectionMain>
          <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title="Partners" main>
            &nbsp;
          </SectionTitleLineWithButton>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
            <Link href={`/fontys`}>
              <CardBox>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                      Fontys
                    </h3>
                  </div>
                  <BaseIcon
                    path={mdiPodcast}
                    size="48"
                    w=""
                    h="h-16"
                    className={colorsText['info']}
                  />
                </div>
              </CardBox>
            </Link>
            <Link href={`/uu`}>
              <CardBox>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">
                      Universiteit Utrecht
                    </h3>
                  </div>
                  <BaseIcon
                    path={mdiWeightLifter}
                    size="48"
                    w=""
                    h="h-16"
                    className={colorsText['info']}
                  />
                </div>
              </CardBox>
            </Link>
          </div>
        </SectionMain>
      </div>
    </div>
  )
}

export default Home
