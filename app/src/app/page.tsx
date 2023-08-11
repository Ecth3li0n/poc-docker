import HelloWorldWave from '@/components/HelloWolrdWave';
import styles from '@/scss/pages/Home.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <HelloWorldWave />
    </main>
  );
}
