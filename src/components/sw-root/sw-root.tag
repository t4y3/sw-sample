sw-root.sw-root
  h1 ServiceWorkerのサンプル
  h2 ついでにIntersectionObserberの確認
  .list
    .list__item(each="{ item, i in list }" ref="item--{ i }")
      img(src="{ item }")
  p(onclick="{ loadMore }" if="{ isMore }") more

  script.
    import script from './script';
    script.apply(this);
