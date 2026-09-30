import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './SimplePage.css';
import Img from '../components/Img';

const devotionPhotos = [
  { id: 1, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777995/black-nazarene.jpg', caption: 'Black Nazarene' },
  { id: 2, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777995/MV5BMTcxMTQyMTIwNF5BMl5BanBnXkFtZTcwNzg5NzkyOA._V1_.jpg', caption: 'Sacred Image' },
  { id: 3, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777996/st-benedict-medal-front-back.png', caption: 'St. Benedict Medal' },
  { id: 4, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777995/snaptik-app-7246241402504350981-slide-1.jpg', caption: 'Devotion 01' },
  { id: 5, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777996/snaptik-app-7246241402504350981-slide-6.jpg', caption: 'Devotion 02' },
  { id: 6, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777996/snaptik-app-7246241402504350981-slide-3.jpg', caption: 'Devotion 03' },
  { id: 7, src: 'https://res.cloudinary.com/bvw3okdf/image/upload/v1790777995/snaptik-app-7246241402504350981-slide-2.jpg', caption: 'Devotion 04' },
];

const prayers = [
  {
    title: 'Signum Crucis — Sign of the Cross',
    latin: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen.',
    english: 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
  },
  {
    title: 'Pater Noster — Our Father',
    latin: 'Pater noster, qui es in caelis, sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra. Panem nostrum cotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem; sed libera nos a malo. Amen.',
    english: 'Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done, on earth as it is in heaven. Give us this day our daily bread; and forgive us our debts, as we also forgive our debtors; and lead us not into temptation; but deliver us from evil. Amen.',
  },
  {
    title: 'Ave Maria — Hail Mary',
    latin: 'Ave, Maria, gratia plena, Dominus tecum; benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.',
    english: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
  },
  {
    title: 'Gloria Patri — Glory Be',
    latin: 'Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen.',
    english: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
  },
  {
    title: "Symbolum Apostolorum — Apostles' Creed",
    latin: 'Credo in Deum, Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus; descendit ad inferos; tertia die resurrexit a mortuis; ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis; inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.',
    english: 'I believe in God, the Father almighty, Creator of heaven and earth. And in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
  },
  {
    title: 'Symbolum Nicaenum — Nicene Creed',
    latin: 'Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium. Et in unum Dominum Iesum Christum, Filium Dei unigenitum, et ex Patre natum ante omnia saecula. Deum de Deo, lumen de lumine, Deum verum de Deo vero, genitum, non factum, consubstantialem Patri: per quem omnia facta sunt. Qui propter nos homines et propter nostram salutem descendit de caelis. Et incarnatus est de Spiritu Sancto ex Maria Virgine, et homo factus est. Crucifixus etiam pro nobis sub Pontio Pilato; passus et sepultus est, et resurrexit tertia die, secundum Scripturas, et ascendit in caelum, sedet ad dexteram Patris. Et iterum venturus est cum gloria iudicare vivos et mortuos, cuius regni non erit finis. Et in Spiritum Sanctum, Dominum et vivificantem: qui ex Patre Filioque procedit. Qui cum Patre et Filio simul adoratur et conglorificatur: qui locutus est per Prophetas. Et unam, sanctam, catholicam et apostolicam Ecclesiam. Confiteor unum Baptisma in remissionem peccatorum. Et exspecto resurrectionem mortuorum, et vitam venturi saeculi. Amen.',
    english: 'I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven. And by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate; he suffered death and was buried, and rose again on the third day in accordance with the Scriptures, and ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end. I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets. I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins. I look forward to the resurrection of the dead and the life of the world to come. Amen.',
  },
  {
    title: 'Salve Regina — Hail, Holy Queen',
    latin: 'Salve, Regina, mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus, exsules filii Evae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria.',
    english: 'Hail, Queen, mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us. And after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.',
  },
  {
    title: 'Sub Tuum Praesidium — Under Your Protection',
    latin: 'Sub tuum praesidium confugimus, Sancta Dei Genetrix; nostras deprecationes ne despicias in necessitatibus, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta.',
    english: 'Under your protection we seek refuge, Holy Mother of God; do not despise our petitions in our necessities, but deliver us always from every danger, O glorious and blessed Virgin.',
  },
  {
    title: 'Angele Dei — Angel of God',
    latin: 'Angele Dei, qui custos es mei, me tibi commissum pietate superna illumina, custodi, rege et guberna. Amen.',
    english: 'Angel of God, my guardian dear, to whom divine goodness entrusts me, enlighten, guard, rule and guide me. Amen.',
  },
  {
    title: 'Regina Caeli — Queen of Heaven',
    latin: 'Regina caeli, laetare, alleluia. Quia quem meruisti portare, alleluia. Resurrexit, sicut dixit, alleluia. Ora pro nobis Deum, alleluia.',
    english: 'Queen of heaven, rejoice, alleluia. For he whom you merited to bear, alleluia, has risen as he said, alleluia. Pray for us to God, alleluia.',
  },
  {
    title: 'Ave Regina Caelorum — Hail, Queen of Heaven',
    latin: 'Ave, Regina caelorum, ave, Domina Angelorum: salve, radix, salve, porta, ex qua mundo lux est orta: gaude, Virgo gloriosa, super omnes speciosa, vale, o valde decora, et pro nobis Christum exora.',
    english: 'Hail, Queen of heaven; hail, Lady of the Angels; hail, root; hail, gate, from whom the Light has arisen for the world. Rejoice, glorious Virgin, beautiful above all; farewell, O most lovely, and pray for us to Christ.',
  },
  {
    title: 'Anima Christi — Soul of Christ',
    latin: 'Anima Christi, sanctifica me. Corpus Christi, salva me. Sanguis Christi, inebria me. Aqua lateris Christi, lava me. Passio Christi, conforta me. O bone Iesu, exaudi me. Intra tua vulnera absconde me. Ne permittas me separari a te. Ab hoste maligno defende me. In hora mortis meae voca me. Et iube me venire ad te, ut cum Sanctis tuis laudem te in saecula saeculorum. Amen.',
    english: 'Soul of Christ, sanctify me. Body of Christ, save me. Blood of Christ, inebriate me. Water from the side of Christ, wash me. Passion of Christ, strengthen me. O good Jesus, hear me. Within your wounds hide me. Permit me not to be separated from you. From the wicked foe defend me. At the hour of my death call me. And bid me come to you, that with your saints I may praise you forever and ever. Amen.',
  },
  {
    title: 'Crux Sancti Patris Benedicti — The Cross of Holy Father Benedict',
    latin: 'Crux sacra sit mihi lux! Non draco sit mihi dux! Vade retro, Satana! Numquam suade mihi vana! Sunt mala quae libas. Ipse venena bibas! Amen.',
    english: 'May the Holy Cross be my light! May the dragon never be my guide! Begone, Satan! Never tempt me with your vanities! What you offer me is evil. Drink the poison yourself! Amen.',
  },
];

function Devotion() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Devotion</p>
          <h1>Faith &amp; Reflection</h1>
        </header>

        <div className="photo-grid">
          {devotionPhotos.map((p) => (
            <div className="photo-tile" key={p.id} onClick={() => setSelected(p)}>
              <Img src={p.src} alt={p.caption} />
            </div>
          ))}
        </div>

        <h2 className="devotion-section-title">Prayers</h2>
        <div className="prayer-list">
          {prayers.map((p) => (
            <div className="prayer-card card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="prayer-latin">{p.latin}</p>
              <p className="prayer-english">({p.english})</p>
            </div>
          ))}
        </div>

        {selected && createPortal(
          <div className="art-lightbox" onClick={() => setSelected(null)}>
            <div className="art-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <img src={selected.src} alt={selected.caption} className="lightbox-img" />
              <button className="art-lightbox-close" onClick={() => setSelected(null)}>x</button>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}

export default Devotion;
