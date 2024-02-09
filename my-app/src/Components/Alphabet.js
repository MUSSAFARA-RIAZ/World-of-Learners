import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import '../App.css'
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";
import g from "../assets/g.png";
import h from "../assets/h.png";
import i from "../assets/i.png";
import j from "../assets/j.png";
import k from "../assets/k.png";
import l from "../assets/l.png";
import m from "../assets/m.png";
import n from "../assets/n.png";
import o from "../assets/o.png";
import p from "../assets/p.png";
import q from "../assets/q.png";
import r from "../assets/r.png";
import s from "../assets/s.png";
import t from "../assets/t.png";
import u from "../assets/u.png";
import v from "../assets/v.png";
import w from "../assets/w.png";
import x from "../assets/x.png";
import y from "../assets/y.png";
import z from "../assets/z.png";
import apple from "../assets/apple.png";
import ball from "../assets/ball.png";
import cat from "../assets/cat.png";
import dog from "../assets/dog.png";
import elephant from "../assets/elephant.png";
import frog from "../assets/frog.png";
import grass from "../assets/grass.png";
import hat from "../assets/hat.png";
import ink from "../assets/ink.png";
import jar from "../assets/jar.png";
import kite from "../assets/kite.png";
import leaf from "../assets/leaf.png";
import monkey from "../assets/monkey.png";
import nose from "../assets/nose.png";
import orange from "../assets/orange.png";
import parrot from "../assets/parrot.png";
import queen from "../assets/queen.png";
import rope from "../assets/rope.png";
import sun from "../assets/sun.png";
import tub from "../assets/tub.png";
import umbrella from "../assets/umbrella.png";
import violin from "../assets/violin.png";
import water from "../assets/water.png";
import x_ray from "../assets/x-ray.png";
import yoyo from "../assets/yoyo.png";
import zoo from "../assets/zoo.png";
import game from "../assets/game.png";
import asound from "../audios/a.mp3";
import bsound from "../audios/b.mp3";
import csound from "../audios/c.mp3";
import dsound from "../audios/d.mp3";
import esound from "../audios/e.mp3";
import fsound from "../audios/f.mp3";
import gsound from "../audios/g.mp3";
import hsound from "../audios/h.mp3";
import isound from "../audios/i.mp3";
import jsound from "../audios/j.mp3";
import ksound from "../audios/k.mp3";
import lsound from "../audios/l.mp3";
import msound from "../audios/m.mp3";
import nsound from "../audios/n.mp3";
import osound from "../audios/o.mp3";
import psound from "../audios/p.mp3";
import qsound from "../audios/q.mp3";
import rsound from "../audios/r.mp3";
import ssound from "../audios/s.mp3";
import tsound from "../audios/t.mp3";
import usound from "../audios/u.mp3";
import vsound from "../audios/v.mp3";
import wsound from "../audios/w.mp3";
import xsound from "../audios/x.mp3";
import ysound from "../audios/y.mp3";
import zsound from "../audios/z.mp3";
const Alphabet = () => { 
  useEffect(() => {
        Aos.init({duration: 2000});  
  }, []);
  const audio1 = new Audio(asound)
  const audio2 = new Audio(bsound)
  const audio3 = new Audio(csound)
  const audio4 = new Audio(dsound)
  const audio5 = new Audio(esound)
  const audio6 = new Audio(fsound)
  const audio7 = new Audio(gsound)
  const audio8 = new Audio(hsound)
  const audio9 = new Audio(isound)
  const audio10 = new Audio(jsound)
  const audio11 = new Audio(ksound)
  const audio12 = new Audio(lsound)
  const audio13 = new Audio(msound)
  const audio14 = new Audio(nsound)
  const audio15 = new Audio(osound)
  const audio16 = new Audio(psound)
  const audio17 = new Audio(qsound)
  const audio18 = new Audio(rsound)
  const audio19 = new Audio(ssound)
  const audio20= new Audio(tsound)
  const audio21= new Audio(usound)
  const audio22= new Audio(vsound)
  const audio23= new Audio(wsound)
  const audio24= new Audio(xsound)
  const audio25= new Audio(ysound)
  const audio26= new Audio(zsound)


  const start1 = () => {
    audio1.play()
  }
  const start2 = () => {
    audio2.play()
  }
  const start3 = () => {
    audio3.play()
  }
  const start4 = () => {
    audio4.play()
  }
  const start5 = () => {
    audio5.play()
  }
  const start6 = () => {
    audio6.play()
  }
  const start7 = () => {
    audio7.play()
  }
  const start8 = () => {
    audio8.play()
  }
  const start9 = () => {
    audio9.play()
  }
  const start10 = () => {
    audio10.play()
  }
  const start11 = () => {
    audio11.play()
  }
  const start12 = () => {
    audio12.play()
  }
  const start13 = () => {
    audio13.play()
  }
  const start14 = () => {
    audio14.play()
  }
  const start15 = () => {
    audio15.play()
  }
  const start16 = () => {
    audio16.play()
  }
  const start17 = () => {
    audio17.play()
  }
  const start18 = () => {
    audio18.play()
  }
  const start19 = () => {
    audio19.play()
  }
  const start20 = () => {
    audio20.play()
  }
  const start21 = () => {
    audio21.play()
  }
  const start22 = () => {
    audio22.play()
  }
  const start23 = () => {
    audio23.play()
  }
  const start24 = () => {
    audio24.play()
  }
  const start25 = () => {
    audio25.play()
  }
  const start26 = () => {
    audio26.play()
  }
  return (
    <>
    <div className="game">
      <img src={game} alt="" />
      <h2>Kids Games: For Toddlers</h2>
      <button>Click on Alphabet!! </button>
    </div>        
    <div className="mains">
      <div data-aos="fade-right" className="alpha" onClick={start1}>
        <img src={a} alt="" />
        <p>A For Apple</p>
        <img src={apple} alt="" className="images"/>
      </div>
      <div data-aos="fade-up"className="alpha" onClick={start2}>
        <img src={b} alt="" />
        <p>B For Ball</p>
        <img src={ball} alt="" className="images"/>
      </div>
      <div data-aos="fade-left"className="alpha" onClick={start3}>
        <img src={c} alt="" />
        <p>C For Cat</p>
        <img src={cat} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start4}>
        <img src={d} alt="" />
        <p>D For Dog</p>
        <img src={dog} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start5}>
        <img src={e} alt="" />
        <p>E For Elephant</p>
        <img src={elephant} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start6}>
        <img src={f} alt="" />
        <p>F For Frog</p>
        <img src={frog} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start7}>
        <img src={g} alt="" />
        <p>G For Grass</p>
        <img src={grass} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start8}>
        <img src={h} alt="" />
        <p>H For Hat</p>
        <img src={hat} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start9}>
        <img src={i} alt="" />
        <p>I For Ink</p>
        <img src={ink} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start10}>
        <img src={j} alt="" />
        <p>J For Jar</p>
        <img src={jar} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start11}>
        <img src={k} alt="" />
        <p>K For Kite</p>
        <img src={kite} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start12}>
        <img src={l} alt="" />
        <p>L For Leaf</p>
        <img src={leaf} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start13}>
        <img src={m} alt="" />
        <p>M For Monkey</p>
        <img src={monkey} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start14}>
        <img src={n} alt="" />
        <p>N For Nose</p>
        <img src={nose} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start15}>
        <img src={o} alt="" />
        <p>O For Orange</p>
        <img src={orange} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start16}>
        <img src={p} alt="" />
        <p>P For Parrot</p>
        <img src={parrot} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start17}>
        <img src={q} alt="" />
        <p>Q For Queen</p>
        <img src={queen} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start18}>
        <img src={r} alt="" />
        <p>R For Rope</p>
        <img src={rope} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start19}>
        <img src={s} alt="" />
        <p>S For Sun</p>
        <img src={sun} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start20}>
        <img src={t} alt="" />
        <p>T For Tub</p>
        <img src={tub} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start21}>
        <img src={u} alt="" />
        <p>U For Umbrella</p>
        <img src={umbrella} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start22}>
        <img src={v} alt="" />
        <p>V For Violin</p>
        <img src={violin} alt="" className="images"/>
      </div>
      <div data-aos="fade-up" className="alpha" onClick={start23}>
        <img src={w} alt="" />
        <p>W For Water</p>
        <img src={water} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start24}>
        <img src={x} alt="" />
        <p>X For X-Ray</p>
        <img src={x_ray} alt="" className="images"/>
      </div>
      <div data-aos="fade-right" className="alpha" onClick={start25}>
        <img src={y} alt="" />
        <p>Y For Yoyo</p>
        <img src={yoyo} alt="" className="images"/>
      </div>
      <div data-aos="fade-left" className="alpha" onClick={start26}>
        <img src={z} alt="" />
        <p>Z For Zoo</p>
        <img src={zoo} alt="" className="images"/>
      </div>
      {/* npm i aos --save */}
    </div>
    </>
  );
};
export default Alphabet;