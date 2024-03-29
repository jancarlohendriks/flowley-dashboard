import { mdiWeightLifter } from '@mdi/js'
import Head from 'next/head'
import SectionMain from '@/components/SectionMain'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton'
import CardBox from '@/components/CardBox'
import TableExercises from '@/components/TableExercises'
import { getPageTitle } from '@/config'
import LayoutTest from '@/layouts/Test'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Exercises = ({ exercises, entity }) => {
  return (
    <LayoutTest entity={entity}>
      <Head>
        <title>{getPageTitle('Exercises')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiWeightLifter} title="Exercises">
          &nbsp;
        </SectionTitleLineWithButton>

        <CardBox hasTable>
          <TableExercises clients={exercises} />
        </CardBox>
      </SectionMain>
    </LayoutTest>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const entity = ctx.query.entity
  const res = await fetch(`http://${process.env.HOST}/api/rating-exercises?entity=${entity}`)
  const exercises: any = await res.json()

  return {
    props: {
      exercises,
      entity,
    },
  }
}

export default Exercises
