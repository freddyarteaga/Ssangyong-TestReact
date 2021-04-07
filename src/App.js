import './App.css';
import Header from './components/Header'
import Item from './components/Item'

import Korando from './assets/Desktop-Korando.jpg'
import KorandoC from './assets/Desktop-KorandoC.jpg'
import Rexton from './assets/Desktop-Rexton.jpg'
import RextonSports from './assets/Desktop-RextonSport.jpg'
import Trivoli from './assets/Desktop-Trivoli.jpg'
import Xlv from './assets/Desktop-Xlv.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app_itemsContainer">
      <Item
            title='Korando-'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Korando}
            leftBtnTxt='ORDER NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
            first
          />
          <Item
            title='KorandoC'
            desc='$69,420'
            descLink=''
            backgroundImg={KorandoC}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item
            title='Rexton'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Rexton}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item
            title='RextonSports'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={RextonSports}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
          />
            <Item
            title='Trivoli'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Trivoli}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item
            title='Xlv'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Xlv}
            leftBtnTxt='ORDER NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
          />
            
      </div>
    </div>
  );
}

export default App;
