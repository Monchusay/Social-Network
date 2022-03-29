import style from "./Music.module.css";
import { NavLink } from "react-router-dom";
import Song from "./Song/Song";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Music = (props) => {

    let pagesCount = Math.ceil(props.totalSongsCount / props.pageSize);
    let pages = []
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i+1);
    }

    useEffect(() => {
        axios
            .get(`https://my-json-server.typicode.com/Monchusay/MyFirstProject/songData?_page=${props.currentPage}&_limit=${props.pageSize}`)
            .then((response) => {
                props.setMusic(response.data)
            });
    },[])

    let songElement = props.songData.map((song, index) => (
        <Song
            key={index}
            image={song.image}
            singer={song.singer}
            songname={song.songName}
        />
    ));

    return (
        <div className={style.musicPage}>
            <div className={style.MyMusic}>
                <NavLink to="/Music/MyMusic" className={style.MyMusic1}>
                    My Music
                </NavLink>
            </div>
            <div className={style.Recommended}>
                <NavLink to="/Music/Recommended" className={style.Recommended1}>
                    Recommended
                </NavLink>
            </div>
            <div className={style.MySongs}>{songElement}</div>
            <div className={style.pagesCount}>
                {pages.map((p) => {
                return (
                <span  key={Math.random()} className={props.currentPage === p && style.selectedPage}>{p}</span>
                )
            })}
            </div>
        </div>
    );
}

export default Music;
