import React from 'react' 

export class NewPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isValidMessage: false, //проверка на валидацию
            message: ""


        }
    }


  

sendPost = (message) => {
    this.props.send(message)
    this.setState({
        message: ""
    })


}


    render(){
        return <div> 
                <div className = "new-post"> 
                    <div className="field "> 
                        <label className="label">Новый пост</label> 
                        <div className="control"> 
                        <textarea
                         onChange={(e) => {this.setState({message: e.target.value})}} 
                         className="textarea" placeholder="Пару слов о вашей котячей жизни" 
                         value = {this.state.message}/> 
                        </div> 
                    </div> 
                    <div className="field is-grouped"> 
                        <div className="control"> 
                        {this.state.message.length > 1
                        ?   <button onClick={()=> {this.sendPost(this.state.message)}} className="button is-link">Отправить</button> 
                        :   <button disabled className="button is-link">Отправить</button> 
                    }
                        </div> 
                    </div> 
                </div> 
            </div>
    }
}