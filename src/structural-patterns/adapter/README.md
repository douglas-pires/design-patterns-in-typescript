# Adapter

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.

## Problem

Imagine that you need to integrate a third-party library into your application. The library has a class that you need to use, but it has an incompatible interface. You can't change the library code, so you have to find a way to make the two classes work together. This is where the Adapter pattern comes in handy.

## Solution

The Adapter pattern suggests that you create a new class that converts the interface of one object so that another object can understand it. For example, related to the problem above, let's say that the third-party library has a method that returns XML and you need the data in JSON format. You can create a class that will convert the XML data to JSON.

## Example

You have two services. One of them returns data in XML format, the other one in SOAP format. In order to communicate with your application, you need to convert both formats to JSON.

### XML service

<https://github.com/douglas-pires/design-patterns-in-typescript/blob/d46235e6d49b4b22083beb605eddc216b7c91d42/src/structural-patterns/adapter/services/api-returning-xml.service.ts#L1-L15>

### SOAP service

<https://github.com/douglas-pires/design-patterns-in-typescript/blob/2ccfa2bc4897c7e5b1a8cc05819cba588623703b/src/structural-patterns/adapter/services/api-returning-soap.service.ts#L1-L20>

test
