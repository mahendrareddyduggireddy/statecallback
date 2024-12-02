import './index.css'
import {Component} from 'react'
import Header from '../Header'
import WebComp from '../webComp'

class MainPage extends Component {
  state = {optVal: 'ALL', compList: []}

  componentDidMount() {
    this.apiCallFunc()
  }

  apiCallFunc = async () => {
    const {optVal} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/ps/projects?category=${optVal}`,
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.projects.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
    }))
    this.setState({compList: updatedData})
  }

  onChangeFunc = event => {
    this.setState({optVal: event.target.value}, this.apiCallFunc)
  }

  render() {
    const {optVal, compList} = this.state
    const {categories} = this.props
    return (
      <div className="main-page-container">
        <Header />
        <select onChange={this.onChangeFunc} value={optVal}>
          {categories.map(each => (
            <option value={each.id} key={each.id}>
              {each.displayText}
            </option>
          ))}
        </select>
        <ul className="ul-container">
          {compList.map(each => (
            <WebComp key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default MainPage
