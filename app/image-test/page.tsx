import Image from 'next/image';

export default function ImageTestPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Image Optimization Test</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Image</h2>
        <Image
          src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4865035761/p554833.png"
          alt="Responsive test image"
          width={640}
          height={400}
          quality={75}
          style={{ borderRadius: '8px' }}
        />
      </section>

      <section>
        <h2>Multiple Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Image
            src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2109057961/p581805.png"
            alt="Medium test image"
            width={456}
            height={240}
            quality={72}
            style={{ borderRadius: '8px' }}
          />
          <Image
            src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6849542261/p279052.png"
            alt="Small test image"
            width={541}
            height={240}
            quality={71}
            style={{ borderRadius: '8px' }}
          />
        </div>
      </section>
    </main>
  );
}
