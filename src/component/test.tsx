import * as React from 'react';
//import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import LibSqlite from '../lib/LibSqlite';

function Page() {
  useEffect(() => {
    (async() => {
      const db = await LibSqlite.getDb();
      let res = JSON.stringify(db.exec("SELECT sqlite_version();"));
      console.log(res);
      /*
      res = JSON.stringify(db.exec(`CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT);`));
      res = JSON.stringify(db.exec(`INSERT INTO users(name) VALUES ('hoge123');`));
      res = JSON.stringify(db.exec(`INSERT INTO users(name) VALUES ('fuga123');`));
      res = JSON.stringify(db.exec(`SELECT * FROM users;`));
      console.log(res)
      */
    })()    
   
  }, []);
  //
  return (
    <div className="container">
      <h3>Test </h3>
      <hr />
      <p>welcome, about</p>
    </div>
  );
}
export default Page;