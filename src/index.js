import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

// 입력 양식 정의
class BookNoteForm extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            body: ''
        }
    }

    bookChanged(e) {
        this.setState({name: e.target.value});
    }
    
    noteChanged(e) {
        this.setState({body: e.target.value});
    }
    
    
    // 웹 서버에 글 작성
    post(e) {
        request 
            .get('/api/write')
            .query({
                name: this.state.name,
                body: this.state.body
            })
            .end((err, data) => {
                if(err){
                    console.error(err);
                }
                this.setState({body: ''})
                if (this.props.onPost){
                    this.props.onPost()
                }
            })
    }

    // 입력 창 표시
    render() {
        return (
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="input-group mb-3">
                    <span className="input-group-text inputTitle" id="basic-addon3">책 제목</span>
                    <input type='text' className="form-control" id="basic-addon3" value={this.state.name} onChange={e => this.bookChanged(e)}/> <br />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text inputTitle" id="basic-addon3">노트</span>
                    <input type='text' aria-describedby="basic-addon3" className="form-control" id="basic-addon3" value={this.state.body} size = '60' onChange={e => this.noteChanged(e)} /> <br/>
                </div>

                <button type="button" className="btn btn-primary" onClick={e=> this.post()}>저장</button>
            </div>
        );
    }
}

class BookNoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        this.loadLogs();
    }

    // API를 통해 노트들을 가져온다.
    loadLogs() {
        request
            .get('/api/getItems')
            .end((err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                this.setState({items: data.body.logs});
            })
    }

    render() {
        const itemsHtml = this.state.items.map(e => (
            <li className="list-group-item" key={e._id}>{e.name} - {e.body}</li>
        ));
        return (
            <div>
                <h1 className="display-3">독서노트</h1>
                <BookNoteForm onPost={e => this.loadLogs()} />
                <p className="right">
                    <button type="button" className="btn btn-primary" onClick={e =>this.loadLogs()}>
                        새로고침
                    </button>
                </p>
                <ul className="list-group">{itemsHtml}</ul>
            </div>
        ) 
    }
}

ReactDOM.render(
    <BookNoteApp />,
    document.getElementById('root')
);
