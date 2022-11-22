import { useSelector, useDispatch } from 'react-redux'
import { Button, Skeleton } from 'antd';
import { update } from '../../redux/appSlice'
import moment from 'moment'
import { useState } from 'react';
import axios from 'axios'
import ReactPlayer from 'react-player/lazy'

export default function Demo () {
    const [data, setData] = useState();

    const { name } = useSelector(state => state.app);
    const dispatch = useDispatch()


    const getData = () => {
        axios.get('https://61dbeb48591c3a0017e1a5ce.mockapi.io/top')
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>Demo</h1>
            <hr/>
            <div>
                <h2>Demo Redux toolkit</h2>
                <span style={{marginRight: 20}}>{name}</span> 
                <Button
                    onClick={() => {
                        dispatch(update({ name: 'Xuan Son ' + Math.floor(Math.random() * 100)  }));
                    }}
                >
                    Change
                </Button>
            </div>
            <div>
                <h2>Demo Redux moment</h2>
                <span>{ moment().format('ll') }</span>
            </div>
            <div>
                <h2>Demo Redux moment</h2>
                <span>{ moment().format('ll') }</span>
            </div>
            <div>
                <h2>Demo Redux axios</h2>
                <Button onClick={() => { getData() }}>Get</Button>
                <span>Data: {JSON.stringify(data)}</span>
            </div>
            <div>
                <h2>Demo Redux react-player</h2>
                <ReactPlayer url='https://www.youtube.com/watch?v=gt3U934kyPQ' />
            </div>
            <div>
                <h2>Demo Redux Antd Skeleton</h2>
                <Skeleton />
            </div>
        </div>
    )
}