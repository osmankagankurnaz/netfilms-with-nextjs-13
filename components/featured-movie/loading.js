import React from "react";
import { Loading } from "@/components/loading";
import Skeleton from "@/components/skeleton";

import styles from "./styles.module.css";

function FeaturedMovieLoading() {
  return (
    <div className={styles.movieWrapper}>
      <Skeleton height={282} />
    </div>
  );
}

export { FeaturedMovieLoading };