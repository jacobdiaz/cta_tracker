import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import ApiUrl from '../lib/ApiUrl';
export default function ScheduleView() {
  useEffect(() => {
    fetch(ApiUrl, { mode: 'cors' }).then((res) => console.log(res));
  });
  return (
    <div>
      <h3> Component</h3>
    </div>
  );
}
