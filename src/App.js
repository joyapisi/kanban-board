import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CardItem from './components/CardItem';
import CardsList from './components/CardsList';
import ColumnWrapper from './components/ColumnWrapper';
import ColumnContainer from './components/ColumnContainer'

function App() {
  return (
    <div className="m-4">
      <h1 className="main-heading">
        KanBan App
      </h1>
      <ColumnWrapper />
      <ColumnContainer />
      <CardsList />
      <CardItem />      
    </div>
  );
}

export default App;
