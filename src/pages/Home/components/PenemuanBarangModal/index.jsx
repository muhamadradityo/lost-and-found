"use client";
import React, { Component } from 'react'

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Success from '../Success';

export default class PenemuanBarang extends Component {
    state = {
        step: 1,
        tipeBarang: '',
        kategori: '',
        warna: '',
        warnaSekunder: '',
        tanggalDitemukan: '',
        jamDitemukan: '',
        lokasiKehilangan: '',
        namaLokasiKehilangan: '',
        fotoBarang: '',
        alamatLokasiKehilangan: '',
        informasiTambahan: '',
        pertanyaanUtama: '',
        jawabanPertanyaanUtama: '',
        pertanyaanValidasi: [],
    }

    resetState = () => {
        this.setState({
            step: 1,
            tipeBarang: '',
            kategori: '',
            warna: '',
            warnaSekunder: '',
            tanggalDitemukan: '',
            jamDitemukan: '',
            lokasiKehilangan: '',
            namaLokasiKehilangan: '',
            fotoBarang: '',
            alamatLokasiKehilangan: '',
            informasiTambahan: '',
            pertanyaanUtama: '',
            jawabanPertanyaanUtama: '',
            pertanyaanValidasi: [],
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
        const { penemuanBarangModal, setPenemuanBarangModal } = this.props;

        switch (step) {
            case 1:
                return (
                    <PenemuanBarangModal penemuanBarangModal={penemuanBarangModal} setPenemuanBarangModal={setPenemuanBarangModal}>
                        <Step1 nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </PenemuanBarangModal>
                )
            case 2:
                return (
                    <PenemuanBarangModal penemuanBarangModal={penemuanBarangModal} setPenemuanBarangModal={setPenemuanBarangModal}>
                        <Step2 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </PenemuanBarangModal>
                )
            case 3:
                return (
                    <PenemuanBarangModal penemuanBarangModal={penemuanBarangModal} setPenemuanBarangModal={setPenemuanBarangModal}>
                        <Step3 prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                    </PenemuanBarangModal>
                )
            case 4:
                return (
                    <PenemuanBarangModal penemuanBarangModal={penemuanBarangModal} setPenemuanBarangModal={setPenemuanBarangModal}>
                        <Success values={values} handleSubmit={this.handleSubmit} />
                    </PenemuanBarangModal>
                );
            default:
                this.resetState();
                setPenemuanBarangModal(false);
                return;
        }
    }
}

const PenemuanBarangModal = ({ children, penemuanBarangModal, setPenemuanBarangModal }) => {
    return (
        <section className={`bg-white/60 min-w-full min-h-full justify-center items-center flex ${penemuanBarangModal ? "fixed inset-0 z-20" : "hidden z-0"
            }`} onClick={() => setPenemuanBarangModal(false)}>
            <div onClick={(e) => e.stopPropagation()} className='max-h-[80%] overflow-x-auto shadow-gray-400 shadow-lg rounded-lg'>
                {children}
            </div>
        </section>
    )
}