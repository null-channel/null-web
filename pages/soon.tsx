import type { NextPage } from 'next'
import Layout from '../components/layout';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script';
import Header from '../components/navbar'

export default function Soon() {
  return (
    <Layout>
        <div>Want to know was is in the pipeline?! don&apos;t we all?</div>
        <div>We have a lot of fun plans.</div>
    </Layout>
  )
}