import Image from "next/image"

const companies = [
  {
    name: "Google",
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Microsoft",
    logo: "https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3ac79f3df8dcd1004af71c17708b4710b9122f99.jpg",
  },
  {
    name: "Amazon",
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.6727766d9460c00ccdc9227810b13eed?rik=mxwYLh5JbnIMkw&riu=http%3a%2f%2fwww.leezon.net%2fuploads%2fnews%2f20200409224022206400.jpg&ehk=PwVPSo4oUR68qEboCGewGrVmulqEqqFBBB8JEi7J9r4%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Apple",
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.f7d842073d5219ff1d1ec4b7f7c87473?rik=3fdW%2bq%2bo3rtjNA&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2021%2f10-13%2f110981%2fwater_110981_698_698_.png&ehk=3LX893M262OOGfJpTNmlxgxYLZ0YmdKz4UQUacsW5CM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Facebook",
    logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.d9GZxbX8Gi9_qGg7XP1ntgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "IBM",
    logo: "https://purepng.com/public/uploads/large/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png",
  },
  {
    name: "Intel",
    logo: "https://logo800.cn/uploads/logoxinshang/57/logo800_16491625427315669.png",
  },
  {
    name: "Cisco",
    logo: "https://stringfestanalytics.com/wp-content/uploads/2022/10/cisco-logo-transparent-2048x1085.png",
  },
  {
    name: "Oracle",
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.db1d03b7557da26924f7498c1d83c55b?rik=7tD1wddXd8u7gQ&riu=http%3a%2f%2fwww.sz4a.cn%2fPublic%2fUploads%2fimage%2f20221020%2f1666270844408401.jpg&ehk=EzP6S1N9y96lQF5lLn4wXkOMQ3b0iAIJ11DQK6QpsHA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "SAP",
    logo: "https://sjc.microlink.io/t1L8I9Isa99KC4qkNPz2IoCqaeUn5YpAbZHIaq_7cPMJvUyqmI_RGrw2yq-lVD67_Lue92GRNiJmxiBynDgqeA.jpeg",
  },
  {
    name: "Adobe",
    logo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-File.png",
  },
  {
    name: "VMware",
    logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.c-21Ho3yVFB1yhDQNdkiHAHaEJ?rs=1&pid=ImgDetMain",
  },
  {
    name: "Nvidia",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png",
  },
  {
    name: "Dell",
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.14faea1f5c3935bdad8b8fd8b98ef358?rik=7HVMm%2ff77s87EQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdell-logo-png-dell-logo-png-2778.jpg&ehk=qtLGk59SkiYYhpviZmFjYlOoRtPpFcBrAowONNrH10A%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "HP",
    logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.huIc0Zd-Q2Rf6NslI7LBDgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Lenovo",
    logo: "https://ts1.cn.mm.bing.net/th/id/R-C.ee53eaa6a2a7f2f1bc66bd317236463d?rik=LADvPSdw5KLbuQ&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f06-16%2f85781%2fwater_85781_698_698_.png&ehk=Jt0JDHw%2bPgf3n5rQiZaK5m1%2fiwXWgmqp2BJSY2glaTw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Huawei",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png",
  },
  {
    name: "Tencent Cloud",
    logo: "https://sjc.microlink.io/PWLlY9fKeZF0hl6iAo2j8JzgALIVnjy39mJjZunXNdNnF8pgGT7O4jhc01xdVaFb1AwNqDmNBXgk9V72rqeESw.jpeg",
  },
]

export default function PartnerCompanies() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          了解企业与GjcjioopOrg的合作案例
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg transition-transform duration-300 hover:scale-110"
            >
              <div className="relative w-[120px] h-[60px]">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

