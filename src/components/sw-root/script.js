import 'sanitize.css';
import './sw-root.css';
import data from './_data';

export default function() {
  this.count = 0;
  this.list = [];
  this.isMore = true;
  this.isLast = false;
  let observer = null;

  /**
   * マウント前
   */
  this.on('before-mount', () => {
    getImg(10);
    this.update();
  });

  /**
   * 画像の追加読み込み
   */
  this.loadMore = () => {
    this.isMore = false;
    // IntersectionObserverが登録済みであれば削除
    if (observer) {
      observer.unobserve(this.refs[`item--${this.count - 1}`]);
    }

    // 追加読み込み
    getImg(10);
    this.update();

    // IntersectionObserverの登録
    if (!this.isLast) {
      observer = new IntersectionObserver(handler, {
        rootMargin: '50px'
      });
      observer.observe(this.refs[`item--${this.count - 1}`]);
    }
  };

  /**
   * 画像をパスを取得
   */
  const getImg = (len) => {
    for (let i = 0; i < len; i++) {
      if (!data[this.count]) {
        this.isLast = true;
        break;
      }
      this.list.push(data[this.count]);
      this.count++;
    }
  };

  /**
   * IntersectionObserverのコールバック
   */
  const handler = (changes) => {
    if (changes[0].isIntersecting) {
      this.loadMore(10);
    }
  };
}
