import CardItem from './components/CardItem';
import CardsList from './components/CardsList';
import ColumnWrapper from './components/ColumnWrapper';
import ColumnContainer from './components/ColumnContainer'

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">
        KanBan App
      </h1>
      <CardItem />
      <CardsList />
      <ColumnContainer />
      <ColumnWrapper />
    </div>
  );
}

export default App;
