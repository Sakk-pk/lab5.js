export default function Card( {cardInfo} ) {
    return (
        <div class="card">
              <h4>Name: {cardInfo.name}</h4>
              <p>
                Hobbies: {cardInfo.hobbies}
              </p>
              <img src={cardInfo.image.src} alt={cardInfo.image.alt} />
        </div>
    );
}