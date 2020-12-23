import e from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { RuntimeGlobals } from 'webpack';

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
    post() {
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
            <div style={StyleSheet.form}>
                책 제목: <br />
                <input type='text' value={this.state.book} onChange={e => this.bookChanged(e)}/> <br />
                노트: <br />
                <input type='text' value={this.state.note} size = '60' onChange={e => this.noteChanged(e)} /> <br/>
                <button onClick={e=> this.post()}>저장</button>
            </div>
        );
    }
}

class BookNoteApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            item: []
        }
    }
    componentWillMount () {
        this.loadLogs();
    }

    // API를 통해 노트들을 가져온다.
    loadLogs () {
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

    render () {
        const itemsHtml = this.state.items.map(e => (
            <li key={e._id}>{e.book} - {e.note}</li>
        ))
        return (
            <div>
                <h1 style={StyleSheet.h1}>독서노트</h1>
                <BookNoteForm onPost={e => this.loadLogs()} />
                <p style={StyleSheet.right}>
                    <button onClick={e =>this.loadLogs()}>
                        새로고침
                    </button>
                </p>
                <ul>{itemsHtml}</ul>
            </div>
        ) 
    }
}

const styles = {
    h1: {
        backgroundColor: 'blue',
        color: 'white',
        fortSize: 24,
        padding: 12
    },
    form: {
        padding: 12,
        border: '1px solid silver',
        backgroundColor: '#F0F0F0'
    },
    right: {
        textAlign: 'right'
    }
}

ReactDOM.render(
    <BookNoteApp />,
    document.getElementById('root')
);
