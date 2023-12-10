import { Grid, GridItem} from '@chakra-ui/react'
import Navbar from './component/Sharedfile/Navbar/Navbar'

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
    <GridItem bg='orange.300' area={'nav'}>
      <Navbar/>
    </GridItem>
    <GridItem  paddingX={5} area={'aside'}>
      aside
    </GridItem>
    <GridItem area={'main'}>
      Main
    </GridItem>
  </Grid>
  )
}

export default App
