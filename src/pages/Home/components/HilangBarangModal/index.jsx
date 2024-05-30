"use client";
import React, { Component } from 'react'

import Step1 from './Step1';
import Step2 from './Step2';
import Success from '../Success';

export default class HilangBarang extends Component {
    state = {
        step: 1,
        tipeBarang: '',
        kategori: '',
        warna: '',
        warnaSekunder: '',
        tanggalKehilangan: '',
        lokasiKehilangan: '',
        namaLokasiKehilangan: '',
        fotoBarang: '',
        alamatLokasiKehilangan: '',
        informasiTambahan: ''
    }

    resetState = () => {
        this.setState({
            step: 1,
            tipeBarang: '',
            kategori: '',
            warna: '',
            warnaSekunder: '',
            tanggalKehilangan: '',
            lokasiKehilangan: '',
            namaLokasiKehilangan: '',
            fotoBarang: '',
            alamatLokasiKehilangan: '',
            informasiTambahan: ''
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 })
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleSubmit = () => {
        console.log(this.state);
        this.state.step = 0;
    }

    render() {
        const { step } = this.state;
        const { tipeBarang, kategori, warna, warnaSekunder, tanggalDitemukan, jamDitemukan, lokasiKehilangan, namaLokasiKehilangan, fotoBarang, alamatLokasiKehilangan, informasiTambahan, pertanyaanUtama, jawabanPertanyaanUtama, pertanyaanValidasi } = this.state;
        const values = { tipeBarang, kategori, warna, warnaSekunder, tanggalDitemukan, jamDitemukan, lokasiKehilangan, namaLokasiKehilangan, fotoBarang, alamatLokasiKehilangan, informasiTambahan, pertanyaanUtama, jawabanPertanyaanUtama, pertanyaanValidasi }
        const { hilangBarangModal, setHilangBarangModal } = this.props;

        switch (step) {
            case 1:
                return (
                    <HilangBarangModal hilangBarangModal={hilangBarangModal} setHilangBarangModal={setHilangBarangModal}>
                        <Step1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </HilangBarangModal>
                )
            case 2:
                return (
                    <HilangBarangModal hilangBarangModal={hilangBarangModal} setHilangBarangModal={setHilangBarangModal}>
                        <Step2 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </HilangBarangModal>
                )
            case 3:
                return (
                    <HilangBarangModal hilangBarangModal={hilangBarangModal} setHilangBarangModal={setHilangBarangModal}>
                        <Success values={values} handleSubmit={this.handleSubmit} />
                    </HilangBarangModal>
                );
            default:
                this.resetState();
                setPenemuanBarangModal(false);
                return;
        }
    }
}

const HilangBarangModal = ({ children, hilangBarangModal, setHilangBarangModal }) => {
    return (
        <section className={`bg-white/60 min-w-full min-h-full justify-center items-center flex ${hilangBarangModal ? "fixed inset-0 z-20" : "hidden z-0"
            }`} onClick={() => setHilangBarangModal(false)}>
            <div onClick={(e) => e.stopPropagation()} className='max-h-[80%] overflow-x-auto shadow-gray-400 shadow-lg rounded-lg'>
                {children}
            </div>
        </section>
    )
}