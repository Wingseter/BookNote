import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

// 입력 양식 정의
class BookNoteForm extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            book: '',
            note: ''
        }
    }

    bookChanged(e) {
        this.setState({book: e.target.value});
    }
    
    noteChanged(e) {
        this.setState({note: e.target.value});
    }
    
    
    // 웹 서버에 글 작성
    post(e) {
        request 
            .get('/api/write')
            .query({
                book: this.state.book,
                note: this.state.note
            })
            .end((err, data) => {
                if(err){
                    console.error(err);
                }
                this.setState({note: ''})
                if (this.props.onPost){
                    this.props.onPost()
                }
            })
    }

    // 입력 창 표시
    render() {
        return (
            <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <div class="input-group mb-3">
                    <span class="input-group-text inputTitle" id="basic-addon3">책 제목</span>
                    <input type='text' class="form-control" id="basic-addon3" value={this.state.book} onChange={e => this.bookChanged(e)}/> <br />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text inputTitle" id="basic-addon3">노트</span>
                    <input type='text' aria-describedby="basic-addon3" class="form-control" id="basic-addon3" value={this.state.note} size = '60' onChange={e => this.noteChanged(e)} /> <br/>
                </div>

                <button type="button" class="btn btn-primary" onClick={e=> this.post()}>저장</button>
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
    componentDidMount() {
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
                this.setState({items: data.note.logs});
            })
    }

    render() {
        const itemsHtml = this.state.items.map(e => (
            <li class="list-group-item" key={e._id}>{e.book} - {e.note}</li>
        ));
        return (
            <div>
                <h1 class="display-3">독서노트</h1>
                <BookNoteForm onPost={e => this.loadLogs()} />
                <p class="right">
                    <button type="button" class="btn btn-primary" onClick={e =>this.loadLogs()}>
                        새로고침
                    </button>
                </p>
                <ul class="list-group">{itemsHtml}</ul>
            </div>
        ) 
    }
}

ReactDOM.render(
    <BookNoteApp />,
    document.getElementById('root')
);
