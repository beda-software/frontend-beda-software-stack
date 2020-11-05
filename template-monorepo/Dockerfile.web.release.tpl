FROM node:12.16.1

RUN yarn global add serve
RUN mkdir /app
COPY --from=builder /app/web/build /app/
WORKDIR /app

EXPOSE 5000
ENV PORT="5000"
CMD serve -s -n -l tcp://0.0.0.0:5000
