const { Link } = ReactRouterDOM
import { MailService } from './services/mail-service.js'
export class MailPreview extends React.Component {
 
  state = {
    mail: null,
    removed: false,
    isRead:null,
    count: null
  }
  componentDidMount() {
    this.loadMail()
  }

  loadMail() {
    const mail =this.props.name
    this.setState({ mail })
    this.setState({isRead:mail.isRead})
   
  }
  componentDidUpdat(){
    this.setState({count: this.props.getMailCount})
  }

  removePreviewedMail =()=>{
    this.props.removePreviewedMail(this.props.name.id)
      this.setState({removed: true })
  }


  taggleIsReading =()=>{
    this.props.taggleIsReading(this.props.name.id)
      this.setState({isRead:!this.state.isRead})
  }

  render() {
    var readingOn=(this.state.isRead)? 'reading':'not-reading';
    var mail =this.props.name
    
    var time=new Date(mail.sentAt).toLocaleString();
    if(this.state.removed) return (null)
  return (
    <article className={`mail-preview ${readingOn}`}>
      
      <div className="first-chart">
        {mail.from.charAt(0).toUpperCase()}
      </div>
      <Link to={`/MailApp/${mail.id}/`}>
        <p>{mail.from.split('@')[0]} </p>
        <p>{mail.from}</p>
        <p>{mail.subject}</p>
        <p>{mail.body.substring(0, 15) + '...'}</p>
        <p>{time}</p>
      </Link>
      <button onClick={ this.taggleIsReading}> Mark read</button>
      <button onClick={this.removePreviewedMail}> x</button>
    </article>
  )
  }
}