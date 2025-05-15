import { useState } from "react";
import styles from "./ReviewCarousel.module.css"

const reviews = [
    {
      name: "Emily R.",
      review: "Absolutely love the quality! Fast shipping and the packaging was super thoughtful.",
      stars: 5
    },
    {
      name: "James W.",
      review: "Great experience overall. One item was slightly delayed, but support was very helpful.",
      stars: 4
    },
    {
      name: "Sofia L.",
      review: "Exactly what I was looking for. Simple, well-made, and just as described.",
      stars: 5
    },
    {
      name: "David K.",
      review: "Didn’t expect much, but I was impressed! Good value for money.",
      stars: 5
    },
    {
      name: "Ava M.",
      review: "Nice product range and easy checkout. I’d love to see more eco-friendly options.",
      stars: 4
    }
  ];

function ReviewCarousel() {
    
    const [index, setIndex] = useState(0);

    function prev() {
        if (index > 0) {
            setIndex(index-1)
        } else {
            setIndex(reviews.length-1);
        }

    }

    function next() {
        if (index < reviews.length -1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    
    return (
        <div className={styles.container}>
            <button onClick={prev}>❮</button>
            <div className={styles.review}>
                <div>{reviews[index].review}</div>
                <div>-{reviews[index].name}</div>
            </div>
            <button onClick={next}>❯</button>
        </div>
    
    )
}

export default ReviewCarousel;
