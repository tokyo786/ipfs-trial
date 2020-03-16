let inputElm = document.getElementById("inputfile")
let resultDiv = document.getElementById("result")

const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

inputElm.addEventListener("change", (e) => {
    let file = e.target.files[0]
    console.log(file)
    let reader = new FileReader()
    reader.addEventListener("load", () => {
        let data = buffer.Buffer.from(reader.result);
        console.log(data)
        ipfs.add(data, (err, hash) => {
            console.error(err)
            console.log(hash)
            let html = `
            <br />
                <a target="_blank" href="https://ipfs.infura.io/ipfs/${hash}"">https://ipfs.infura.io/ipfs/${hash}</a>
            `
            resultDiv.innerHTML = html
        })
    })
    reader.readAsArrayBuffer(file)
})
