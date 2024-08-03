"use client";
import styles from "./productRating.module.css";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function ProductRating({ rating }) {
  return (
    <Stack spacing={1}>
      <Rating className={styles.ratingStyle} precision={rating} readOnly />
    </Stack>
  );
}
